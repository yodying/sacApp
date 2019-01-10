import axios from 'axios';
function getDataFirstLoads(saveStorage){
    axios.post(global.url+'/home_api/firstLoad', {
        lang: 'th',
      })
      .then(function (response) {
        this.setState({
            dataFirstLoads: response.data,
          })
        this._saveStorageData('dataFirstLoads',JSON.stringify(response.data))
        console.log(this.state.dataFirstLoads);
      })
      .catch(function (error) {
        console.log(error);
      });
}