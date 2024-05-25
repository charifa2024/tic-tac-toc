let title=document.querySelector('.title');
let turn ='x';
let squares=new Array;
function end_game(n1,n2,n3){
    title.innerHTML=(squares[n1]+' win ');
    document.getElementById('item'+n1).style.background='green';
    document.getElementById('item'+n2).style.background='green';
    document.getElementById('item'+n3).style.background='green';

    setInterval(function(){title.textContent+='.'},2000);
    setTimeout(function(){location.reload()},4000);

}
function winner(){
    for(let i=1;i<10;i++){
        squares[i]=document.getElementById('item'+i).textContent;
    }
    if(squares[1]==squares[2] && squares[3]==squares[2] && squares[2]!='' ){
        end_game(1,2,3);
    }
    else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[5]!='' ){
        end_game(4,5,6);
    }
    else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[8]!='' ){
        end_game(7,8,9);
    }
    else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[4]!='' ){
        end_game(1,4,7);
    }
    else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[5]!='' ){
        end_game(2,5,8);
    }
    else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[6]!='' ){
        end_game(3,6,9);
    }
    else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[5]!='' ){
        end_game(1,5,9);
    }
    else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[5]!='' ){
        end_game(3,5,7);
    }
    else{
        let k=0;
        for(let i=1;i<10;i++){
            if(squares[i]!='')
            k++;
        }
        if(k==9){
        title.textContent='there is no winner !';
        setInterval(function(){title.textContent+='.'},2000);
        setTimeout(function(){location.reload()},4000);}
    }
}
function game(id){
    let element =document.getElementById(id);
    if(turn ==='x' && element.textContent==''){
        element.textContent='x';
        turn='o';
        title.textContent='O';
    }
    else if(turn==='o' && element.textContent==''){
    element.textContent='o';
    turn='x';
    title.textContent='X';
    }
    winner();
}