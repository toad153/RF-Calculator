function calc()
{
    var r= document.getElementById('ref').value; 

    var rl = -20 * Math.log10(r);

    document.getElementById('floatingOutput1').value = rl;

    console.log(rl);

}

function rl()
{
    var rl= document.getElementById('rl').value; 

    var rc = Math.pow(10,(-rl/20));

    document.getElementById('floatingOutput2').value = rc;

    console.log(rc);

}

function vswr()
{
    var vswr= document.getElementById('vswr').value; 

    var a = (parseFloat(vswr)-1);

    var b = (parseFloat(vswr)+1);

    var x = a/b;

    var rl1 = -20 * Math.log10(x);

    document.getElementById('floatingOutput3').value = rl1;

    console.log(rl1);

}

function vs()
{
    var vs= document.getElementById('vs').value; 

    var a = (parseFloat(vs)-1);

    var b = (parseFloat(vs)+1);

    var rc = a/b;

    document.getElementById('floatingOutput4').value = rc;

    var ml = -10 * Math.log10(1-Math.pow(rc,2));

    document.getElementById('floatingOutput5').value = ml;

    var rl = -20 * Math.log10(rc);

    document.getElementById('floatingOutput6').value = rl;


}

function rc()
{
    var vs= document.getElementById('rc').value; 

    var a = 1-(parseFloat(vs));

    var b = 1+(parseFloat(vs));

    var vswr = b/a;

    document.getElementById('floatingOutput7').value = vswr;

    var ml = -10 * Math.log10(1-Math.pow(vs,2));

    document.getElementById('floatingOutput8').value = ml;

    var rl = -20 * Math.log10(vs);

    document.getElementById('floatingOutput9').value = rl;
}

function rlcal()
{
    var rlcal= document.getElementById('rlcal').value;
    
    var rc = Math.pow(10,(-rlcal/20));

    document.getElementById('floatingOutput12').value = rc;

    var a = 1-(parseFloat(rc));

    var b = 1+(parseFloat(rc));

    var vswr = b/a;

    document.getElementById('floatingOutput10').value = vswr;

    var ml = -10 * Math.log10(1-Math.pow(rc,2));

    document.getElementById('floatingOutput11').value = ml;

}

function rcvswr()
{
    var rc= document.getElementById('rcvswr').value;

    var a = 1-(parseFloat(rc));

    var b = 1+(parseFloat(rc));

    var vswr = b/a;

    document.getElementById('floatingOutput13').value = vswr;
}

function rlvswr()
{
    var rl= document.getElementById('rlvswr').value;

    var rc = Math.pow(10,(-rl/20));

    var a = 1-(parseFloat(rc));

    var b = 1+(parseFloat(rc));

    var vswr = b/a;

    document.getElementById('floatingOutput14').value = vswr;

}

function vswrrc()
{
    var vswr= document.getElementById('vswrrc').value; 

    var a = (parseFloat(vswr)-1);

    var b = (parseFloat(vswr)+1);

    var x = a/b;

    document.getElementById('floatingOutput15').value = x;

}

function calculate()
{
  var pt1 = document.getElementById("unitpt").value;
  var gt = document.getElementById("gt").value;
  var gr = document.getElementById("gr").value;
  var w = document.getElementById("w").value;
  var r1 = document.getElementById("unitr").value;

//for pt
if(pt1 == "dBm"){
   var pt = document.getElementById("pt").value;
}
if (pt1 == "watts"){
  var pt = 10 * Math.log10(document.getElementById("pt").value) + 30;
}

//for r
if(r1 == "meter"){
  var r = document.getElementById("r").value;
}
if (r1 == "miles"){
  var r = document.getElementById("r").value * 1609.344;
}

// var pr1 = (pt*gt*gr*w*w)/(4* Math.PI * r * 4* Math.PI * r);

// var x = w/4* Math.PI * r

var x = 4* Math.PI * parseFloat(r)

var y = parseFloat(w)

var z= y/x

var pr1 = parseFloat(pt) + parseFloat(gt)  + parseFloat (gr) + (20 * Math.log10(z))
 
document.getElementById("result1"). value = pr1;

pr2  =  Math.pow(10,(pr1/10)) / 1000

document.getElementById("result2").value = parseFloat(pr2);

console.log(pr1);
console.log(pr2);
}
