// Разбирал итераторы и не понимал зачем они нужны.
// На одном из курсов по JS, ментор описал ситуацию, что мы получаем большой текст,
// который нужно разбить на отдельные слова и вывести через цикл каждое отдельное слово.
// Делать из текста массив было бы дорогим удовольствием. Элементов может больше 1000 и более.
// Поэтому чтобы не засорять память, можно воспользоваться итератором.
// Решил реализовать.

let longText = 'it is the test text so long and long and long how is can do';

//iterateText( longText, ' ' );

// во время итеации меняется значение from. Не знаю, правильно ли это?


function iterateText( text, delim ){

    return{
        from: 0,
        text,
        delim,
        [Symbol.iterator]: function(){
            let { from,  text, delim} = this;
            let indexFrom = 0;
    
             return {
                 next(){
                       if( text.indexOf(delim, from) !== -1 ){
                           let delimIndex =  text.indexOf(delim, from);
                           let returnValue = text.slice(from, delimIndex);
                           //console.log( 'from ' + from  );  
                           from = delimIndex + 1;   
                                 
                           //console.log( 'delimIndex ' + delimIndex  );      
                           //console.log( 'returnValue ' + returnValue  );
                           //console.log( '----------' )      ;
                           return {
                                done: false,
                                value: returnValue
                            }
                        }
                        else{ return {done: true} }
                 }
             }  
        }
    }
    
}

for( let tst of  iterateText( longText, ' ' )){
    console.log(tst)
}

// можно повторно использовать
// for( let tst of  iterateText( longText, ' ' )){
//     console.log(tst)
// }
