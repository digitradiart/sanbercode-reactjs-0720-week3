import React, {Component} from "react"

class Lists extends Component{

  constructor(props){
    super(props)
    this.state ={
     pesertaLomba : [ 'Budi', 'Susi', 'Lala', 'Agung' ],
     inputName : "",
     indexOfform: -1    
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(event) {
    let index = event.target.value;
    let peserta = this.state.pesertaLomba[index];
    // console.log(event.target.value);
    // console.log(peserta);

    this.setState({inputName: peserta});
  }

  handleChange(event){
    //   console.log(event.target.value);
    this.setState({inputName: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault()
    let newpesertaLomba = this.state.pesertaLomba
    let index = this.state.indexOfform
    if (index === -1) {
        newpesertaLomba = [...newpesertaLomba, this.state.inputName]
    } else {
        newpesertaLomba[this.state.indexOfform] = this.state.inputName
    }

    this.setState({
        pesertaLomba: newpesertaLomba,
        inputName: ''
    })
  }

  render(){
    return(
      <>
        <h1>Daftar Peserta Lomba</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.pesertaLomba.map((val, index)=>{
                  return(                    
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{val}</td>
                      <td>
                          <button onClick={this.handleEdit} value={index}>Edit</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        {/* Form */}
        <h1>Form Peserta</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Masukkan nama peserta:
          </label>          
          <input type="text" value={this.state.inputName} onChange={this.handleChange}/>
          <button>submit</button>
        </form>
      </>
    )
  }
}

export default Lists;