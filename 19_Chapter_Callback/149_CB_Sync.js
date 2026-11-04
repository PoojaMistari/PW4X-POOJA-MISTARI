let testResult=["Pass","Fail","Skip"];
    testResult.forEach(function(result,index){
        console.log("Test Result is",result,index);
    });

    // "All done" prints LAST because forEach is synchronous — it finishes all 4 iterations first, then moves on.