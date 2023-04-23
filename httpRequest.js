import axios from 'axios';

export async function getRanking(data){
    return await axios.get('http://ec2-35-72-70-146.ap-northeast-1.compute.amazonaws.com:8080/coin/' + data.standard + '/ranking/' + data.unit + '/' + data.currency + '/' + data.exchange)
    .then(response => {
        // 요청이 성공하면 실행됩니다.
        //console.log(response.data)
        return response.data;
    })
    .catch(error => {
        // 요청이 실패하면 실행됩니다.
        return error;
    });
}

export async function getPremium(){
    return await axios.get('http://ec2-35-72-70-146.ap-northeast-1.compute.amazonaws.com:8080/coin/premium')
    .then(response => {
        // 요청이 성공하면 실행됩니다.
        //console.log(response.data)
        return response.data;
    })
    .catch(error => {
        // 요청이 실패하면 실행됩니다.
        return error;
    });
}