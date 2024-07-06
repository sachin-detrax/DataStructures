pair_arr = [1,3,7,9,2];

target = 11;


function find_pair(t,arr){
    for(i = 0; i< arr.length;){
        let p1 = arr[i] //1 // 1
        let p2 = arr[i+1] //3
       for(j = i+1; j< arr.length;){ // j = 1 J<5; j++
            if((t-p1) == p2){
                console.log("got it",p1,p2)
                return p1,p2;
            }
            j++;
            
       }
       i++;
    }
}

find_pair(target,pair_arr);