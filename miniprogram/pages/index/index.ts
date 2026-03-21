Component({
  data: {
    ipt10:"",
    ipt20:"",
    ipt30:"",
    ipt40:"",
    printf:"0",

    f1:true,
    f2:false,
    f3:false,
    f4:false,
  },

  methods: {
    jump(e:any){
      const id = e.currentTarget.id;
      const x = parseInt(e.detail.value,10);
      
      if(e.detail.value===""){
        this.setData({[id]:""});
      }
      else if(x<0 || x>255){
        this.setData({[id]:"255"});
      }
      else{
        this.setData({[id]:x});
      }
      
      if(e.detail.value.length === 3){
        switch(id){
          case "ipt10":
            this.setData({f1:false,f2:true});
          break;

          case "ipt20":
            this.setData({f2:false,f3:true});
          break;

          case "ipt30":
            this.setData({f3:false,f4:true});
        }
      }
    },

    a(){
      let cup1 = "",cup2 = "",cup3 = "",cup4= "";

      let i1 = Number(this.data.ipt10);
      while(i1>0){
        cup1 = (i1%2)+cup1;
        i1 = Math.floor(i1/2);
      }
      cup1 = cup1.padStart(8,"0");

      let i2=Number(this.data.ipt20);
      while(i2>0){
        cup2 = (i2%2)+cup2;
        i2 = Math.floor(i2/2);
      }
      cup2 = cup2.padStart(8,"0");

      let i3=Number(this.data.ipt30);
      while(i3>0){
        cup3 = (i3%2)+cup3;
        i3 = Math.floor(i3/2);
      }
      cup3 = cup3.padStart(8,"0");

      let i4=Number(this.data.ipt40);
      while(i4>0){
        cup4 = (i4%2)+cup4;
        i4 = Math.floor(i4/2);
      }
      cup4 = cup4.padStart(8,"0");
    }
  },
})
