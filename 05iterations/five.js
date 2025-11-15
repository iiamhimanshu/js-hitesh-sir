const coding = ["java","js","cpp","python","ruby"]

coding.forEach( function(val){
    // console.log(val);
    
} )

coding.forEach( (item) =>{
    // console.log(item);
    
} )

function print (item){
    console.log(item);
    
}

// coding.forEach(print)

coding.forEach( (item , index ,arr) => {
    // console.log(item,index,arr);
    
})

const myCoding = [
    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]

myCoding.forEach( (item) => {
        // console.log(item); 
        // ==> this give current object in that array
        // console.log(item.languageName);
        // ==> this give language name of the current obj
                
} )

