function showWow() { 
    const amount = document.getElementById("amount").value    
    let show= ""    
    let count = 0
    for (let a = 1; a <= amount; a++) {
        for (let b = 1; b <= amount; b++) {
            for (let c = 1; c <= amount; c++) {      
                for (let d = 1; d <= amount; d++) {     
                    for (let e = 1; e <= amount; e++) {     
                        for (let f = 1; f <= amount; f++) {  
                            for (let g = 1; g <= amount; g++) {   
                                for (let h = 1; h <= amount; h++) {    
                                    if (a*e+b*g == 10*a+e && a*f+b*h == 10*b+f && c*e+d*g == 10*c+g && c*f+d*h == 10*d+h ) {
                                        count++
                                        show = show + `ชุดที่ ${count} <br> ${a} , ${b} <br> ${c} , ${d} <br><br> ${e} , ${f} <br> ${g} , ${h} <br><br>`                                                            
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    let count2 = 'WowMatrix ที่มีสมาชิกเป็นจำนวนนับไม่เกิน  ' + amount +  ' มีจำนวน ' + count + ' ชุด ดังนี้'
    document.getElementById("show1").innerHTML = count2
    document.getElementById("show2").innerHTML = show
}
