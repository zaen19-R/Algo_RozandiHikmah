var angka = [1,2,3,4,5,6]

function myfunction(arr,find){
    y=0
    i = 0
    temp =[]
    data = temp.push(arr.slice(y,find));
    if(find<arr.length & find>1){
        data2 = arr.slice(y+find)
        if(data2.length>find){
            console.log(temp[i],data2.slice(y,y+find),data2.slice(y+find,y+find*2))
        }
        else{
            console.log(temp[i],data2)
        }
    }
    else{
        if(find==6){
            console.log(arr)
        }
        else{
            console.log(' Masukkan Angka > 1 / < 6')
        }
    }
}

// myfunction(arr,find)
myfunction(angka,2)