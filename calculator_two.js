let answer = document.getElementById('answer');
let item = '';
function getData(element){
  data = element.innerText;
  if(data == '='){
    result = eval(item);
    item = result;
    answer.innerText = item;
  }else if(data == 'AC'){
    answer.innerText = '0';
    item = '';
  }else if(data == 'C'){
    length = item.length;
    item = item.slice(0,length-1);
    answer.innerText = item;
  }else{
    item += data;
    answer.innerText = item;
  }
  
}
