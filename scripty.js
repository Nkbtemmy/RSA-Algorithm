const isPrime= (prime)=>{
    let i, j;
	j = (Math.floor(Math.sqrt(prime)));
	for ( i = 2; i <= j; i++){
		if ( prime % i == 0 ){
			return false;
		}
	}
	return true;
}

const calculateE= (t)=>{
	// e ( 1 < e < t )
	let e;
	for ( e = 2; e < t; e++ ){
        if (greatestCommonDivisor( e, t ) == 1 ){
            return e;
        }
	}
	return -1;
}

const greatestCommonDivisor= (e,t)=>{
    while ( e > 0 ){
        let myTemp;
        myTemp = e;
        e = t % e;
        t = myTemp;
    }
    return t;
}

const calculateD= (e,t)=>{
	// d · e = 1 (mod f(n))
	let d;
	let k = 1;
	while ( 1 ){
		k = k + t;
		if ( k % e == 0){
			d = (k / e);
			return d;
		}
	}
}

const encrypt= (i,e,n)=>{
   // i = i.charCodeAt();
  // console.log("*",i)
    let current, result;
	current = i - 97;
	result = 1;
	for ( let j = 0; j < e; j++ ){
		result = result * current;
		result = result % n;
	}
    //console.log("*",result)
	return result;

    
}

const decrypt= (i,d,n)=>{
    let current, result;
	current = i;
	result = 1;
	for ( let j = 0; j < d; j++ ){
		result = result * current;
		result = result % n;
	}
	return result + 97;
}

const main = () =>{
    let p, q, n, t, e, d;
    let encryptedText = [100]; 
    //memset(encryptedText, 0, sizeof(encryptedText));
    let decryptedText = [100];
    var flag;
    var msg;
    document.write("<center><b>Welcome to RCA program</b></center><br /><br />");
    do{
		p = prompt ("Enter a Prime number p ",911);
        document.writeln("<br /> P: ",p);
		flag = isPrime( p );
        if ( flag == false ){
            document.write("<br /> WRONG INPUT (This number is not Prime. A  prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself) <br />");
        }
        
    } while ( flag == false );

    do{
        q = prompt("Enter a Prime number q :",971);
        document.writeln("<br /> Q: ",q)
        flag = isPrime( q );
        if ( flag == false ){
            document.write("<br /> WRONG INPUT (This number is not Prime. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself) <br />");
        }
    } while ( flag == false);

    n = p * q;
    document.write("<br /> Result of computing n = p*q = " + n +"<br />");

    t = ( p - 1 ) * ( q - 1 );
    document.write("Result of Q(n):   = " + t +"<br />");

    e = calculateE( t );
    d = calculateD( e, t );
    document.write("<br /> RSA public key is (n = "+ n + ", e = " +  e + ")"+"<br />");
    document.write("RSA private key is (n = " + n + ", d = " + d + ")"+ "<br />");

    msg = prompt("Enter Message to be encryped:","GroupeNumberTwo");
    // there is a newline character left in the input stream, so we use ignore()
    document.write("<br /> The message is:  " + msg + "<br />");

    // encryption
    for (let i= 0; i < msg.length; i++){
        encryptedText[i] = encrypt( msg[i].charCodeAt(), e, n);        
    }

    document.write("<br /> THE ENCRYPTED MESSAGE IS: ");
    for ( let i = 0; i < msg.length; i++ ){
        document.write("<b>",String.fromCharCode(encryptedText[i]),"</b>") ;
    }

    //decryption
    for (let i = 0; i < msg.length; i++){
        decryptedText[i] = decrypt(encryptedText[i], d, n);
    }
    document.write("<br /> <br /> THE DECRYPTED MESSAGE IS: ");
   
    for (let i = 0; i < msg.length; i++){
        document.write("<b>",String.fromCharCode(decryptedText[i]),"</b>" );
    }
}
