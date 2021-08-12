/*
 * Complete the 'libraryFine' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1  //day returned
 *  2. INTEGER m1  //month returned
 *  3. INTEGER y1  //year returned
 *  4. INTEGER d2  //day due
 *  5. INTEGER m2  //month due
 *  6. INTEGER y2  //year due
 */

const libraryFine = (d1, m1, y1, d2, m2, y2) => {
    let lateFeeAmount = 0;
    let dayFine = 15;
    let monthFine = 500;
    let yearFine = 10000;
    
    if(y1 !== y2) {
        if(y1 > y2) {
            lateFeeAmount = yearFine;
        } else {
            lateFeeAmount = 0;
        }  
    }
    if(y1 === y2 && m1 !== m2) {
        if(m1 > m2) {
            const numberLateMonths = m1 - m2;
            lateFeeAmount = numberLateMonths * monthFine;
        } else {
            lateFeeAmount = 0;
        }
    }
    if(y1 === y2 && m1 === m2 && d1 !== d2) {
        if(d1 > d2) {
            const numberLateDays = d1 - d2;
            lateFeeAmount = numberLateDays * dayFine;
        } else {
            lateFeeAmount = 0;
        }
    }
    
    return lateFeeAmount;
}
