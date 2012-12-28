// Exports motlify(str) -> str

// Character Map:
// Each letter correlates to an array of alternate characters.
// Each element of that array is either a string or an Array.
// If an array, the [0]th is the substitution string and the [1]th
// entry is a string of characters indicating browesers that
// have an 'issue' with that character.

// 'i' iTunes
// 'p' PC based browser
// 'x' OSX

// not found on windows with Firefox '&#8516;' (y) &#8513; (g) &#9877;(i) &#8506; (Q) &#9874; (x)
// On safari under windows: &#1015; (p)  &#9840; (t)  &#9877;(i) &#8512;(e)

var _rawtable = {
'A':['&#1044;','&#1126;','&#197;','&#9398;','&#923;'],
'B':['&#1041;','&#1066;','&#9837;','&#9399;','&#946;'],
'C':['&#8451;','&#9790;','&#199;','&#390;','&#8450;','&#9400;'],
'D':['&#8502;','&#208;','&#9401;','&#916;'],
'E':['&#1028;','&#8494;','&#8455;','&#398;','&#9402;','&#926;','&#958;'],
'F':['&#8457;','&#8498;','&#401;','&#402;','&#9403;'],
'G':['&#1152;',['&#8513;','i'],'&#9404;'],
'H':['&#8459;','&#8461;','&#9281;','&#9796;','&#9405;'],
'I':[['&#9877;','i'],'&#8544;','&#9406;'],
'J':['&#8464;','&#308;','&#9407;'],
'K':['&#310;','&#312;','&#408;','&#7732;','&#7728;','&#9408;'],
'L':['&#8466;','&#8467;&#313;','&#313;','&#9409;'],
'M':['&#653;','&#7746;','&#7742;','&#8499;','&#9410;'],
'N':['&#1048;','&#8463;','&#8469;','&#209;','&#331;','&#413;','&#9411;','&#1037;'],
'O':['&#1054;','&#1060;','&#214;','&#9786;',['&#9862;','i'],'&#9412;','&#952;'],
'P':['&#8473;','&#9799;','&#9413;','&#1015;'],
'Q':['&#8474;',['&#8506;','i'],'&#9414;'],
'R':['&#8477;','&#8478;','&#340;','&#9415;','&#1071;'],
'S':['5','&#9761;',['&#9889;','i'],'&#423;','&#9416;'],
'T':['&#1043;',['&#9840;','i'],['&#9840;','i'],'&#358;','&#7790;','&#9417;'],
'U':['&#1062;','&#8487;','&#9418;','&#956;'],
'V':['&#1140;','&#8483;','&#9419;'],
'W':['&#1120;','&#1064;','&#9420;'],
'X':['&#1046;','&#1061;','&#9747;',['&#9874;','i'],'&#8501;','&#9421;'],
'Y':['&#1063;','&#1136;',['&#8516;','i'],'&#9282;','&#9422;'],
'Z':['&#9761;','&#437;','&#548;','&#9423;'],
'1':['&#7735;'],
'2':['&#443;'],
'3':['&#440;','&#494;','&#8485;'],
'4':['&#1063;'],
'5':['&#444;','S'],
'6':['&#1041;','&#9837;'],
'7':['&#1043;','7'],
'8':['8','&#952;'],
'0':['&#1054;','&#9786;',['&#9862;','i'],'&#9412;']
}

function _isString(s){ return s.constructor == "".constructor; }
function _isArray(s){ return s.constructor == [].constructor; }

function _maketable(b){
    // returns a table with troublesome characters removed
  var ret = {};
  for(var c in _rawtable){
    var out = [];
    // walk the alternate chars
    for(var i in _rawtable[c]){
      var entry = _rawtable[c][i];
      if(_isString(entry)){
	out.push(entry);
      } else { if (entry[1].indexOf(b)==-1) out.push(entry[0]); }
    }
    ret[c] = out;
  }
  return ret;
}

var _agent=navigator.userAgent.toLowerCase();
var _browserFlag = 'a';		// use 'a'll characters
if(_agent.indexOf('iphone')!=-1) _browserFlag = 'i'; // iPhone
var _ctable = _maketable(_browserFlag);

function _c2c(c){
  var na = _ctable[c.toUpperCase()];
  if(na) return na[Math.floor(na.length*Math.random())];
  else return c;
}

function motlify(s){ return s.split('').map(_c2c).join(''); }