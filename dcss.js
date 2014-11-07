
dcss = {
    grid : function (index,count,cols , centerX , centerY,invert){
        var row = Math.floor(  index/ cols);   
        var col = (index - (row * cols));
        var rows = Math.ceil(count/cols);   
        if(centerX != null){
           col = col - (cols-1) * centerX;
        }else
        {
            cols = 0;
            col  = 0;
        }
        if(centerY != null){
            row = row - (rows-1) * centerY;
        }else{
            row  = 0;
            rows = 0;
        }
        if(row < 0) row = -row;
        if(col < 0) col = -col;
        var res = row+col;
        if(invert ===true){
            res = (cols+rows-2) -res;
        }
        return res ; 
    },
    gridRowCol: function(index,cols){
        var row = Math.floor(  index/ cols);   
        var col = (index - (row * cols));
        return {row:row,col:col};
    },
    ease : function ( c1,c2,  r) {
        var s2,s3;
        s2 = c1;
        s3 = c2;
        var s1;
        s1 = 0 + (s2 - 0) * r;
        s2 = s2 + (s3 - s2) * r;
        s3 = s3 + (1 - s3) * r;
        s1 = s1 + (s2 - s1) * r;
        s2 = s2 + (s3 - s2) * r;
        return s1 + (s2 - s1) * r;
    }
};

if(jQuery){
    (function ( $ ) {
        // replace all occurrence of 'token' inside 'text' by 'value'.
        var  replaceAll=function(text,token,value){
            var index=-1;
            string = text;
            while((index = string.indexOf(token,index+1)) > -1){
                    string = string.replace(token, value);
            };
            return string;
        }
        //register our 'dcss' function as jquery plugin.
        $.fn.dcss = function(props,values) {
            //holder for modified property values
            var p;       
            //hold property value till modifing all args
            var v;      
            //count of elements
            var c = this.length;
            this.each(function(index){
                //create new object to hold specific values for the current selected element
                p = {};
                //compute values
                var vals = {};
                for (var vkey in values) {	
                    //get current value object  {value : 1,added : 1}.
                    v = values[vkey];
                    //process the value according to its type
                    if ( typeof(v) === 'number'){
                        vals[vkey] = v;
                    }else if ( typeof(v) === 'function'){
                        vals[vkey] = v(index,this,c);
                    }else if ( typeof(v) === 'string'){
                        vals[vkey] = v;
                    }
                    if (vals[vkey] === null) vals[vkey] = "";
                    if (vals[vkey] === undefined) vals[vkey] = "";
                }
                
                //loop throw properties to change values inside them
                for (var pkey in props) {
                        //set pre-processed value to holder 'p' object.
                        p[pkey] = props[pkey];      
                        //loop throw all actual value to change them in p object.
                        for (var vkey in values) {	
                                //replace all occurence of keys in the property value.
                                p[pkey] = replaceAll(p[pkey],'<'+ vkey + '>', vals[vkey] );
                        }
                    }
                    //apply the css.
                    $(this).css(p);
            });
            //return jquery object again to allow Chaining.
            return this;
        };
    }( jQuery ));
}

