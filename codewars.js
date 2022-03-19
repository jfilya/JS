// по количеству рукопожатий посчитать количество людей
function getParticipants(handshakes){
    let count = 1;  
    let i = 0;
  while( i <= handshakes){
      count += 1;
      i += (count - 1); 
    }
    return count ; 
  }
  getParticipants(6);

  