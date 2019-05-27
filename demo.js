const scanf=require('scanf');
// console.log('请输入两个数，计算两个数的和：请按回车继续');
// scanf('%d');
// console.log('输入a:');
// let a=scanf('%d');
// console.log('输入b:');
// let b=scanf('%d');
// let c=a+b;
// console.log('拼接a+b='+a+b);
// console.log('a+b=c='+c);
// console.log('a+b='+(a+b));
// console.log('输入两个数 比较大小');
// console.log('输入a');
// let a=scanf('%d');
// console.log('输入b');
// let b=scanf('%d');
// if(a>b){
//     console.log('最大值'+a);
// }else if(b>a){
//     console.log('最大值'+b);
// }
// let arr=[];
// console.log('长度为'+arr.length);
// console.log('内容为'+arr);
// for(let i=0;i<arr.length;i++){
//     const a=arr[i];
//     console.log(a);
// }
// console.log('欢迎进入');

// while(1){

    
//     console.log('1----添加数字');
//     console.log('2----删除数字');
//     console.log('3----显示所以数字'); 

//     console.log('4----退出');
//     const src=scanf('%d');
//     if(src===1){
//         console.log('1----添加数字');
//         let a=scanf('%d');
//         arr.push(a);
//         console.log('添加成功');
//         scanf('%d');

//     }
//     if(src===2){
//         console.log('2----删除数字');
//         arr.pop();

//         console.log('删除成功');
//         scanf('%d');
//     }
//     if(src===3){
//         for(let i=0;i<arr.length;i++){
//             let a=arr[i];
//             console.log(a);
//         }
//     scanf('%d');


//     }
//     if(src===4){
//         console.log('4----退出');
//         scanf('%d');
//         break;

//     }
// }
// const arr=[];
// console.log('欢迎进入');
// while(1){
//      console.log('1----添加坐标');
//      console.log('2----删除坐标');
//      console.log('3----显示所有坐标');
//      console.log('4----退出');
//      const a=scanf('%d');
//      if(a===1){
//          console.log('请输入x坐标');
//          let x=scanf('%d');
//          console.log('请输入y坐标');
//          let y=scanf('%d');
//          let zuobiao={
//              x:x,
//              y:y
//          }
//          arr.push(zuobiao);
//          console.log('添加成功');
//          scanf('%d');

//      }
//      if(a===2){
//         arr.pop();

//                 console.log('删除成功');
//                 scanf('%d');


//      }
//      if(a===3){
//         console.log('2---显示全部坐标');
//                 for(let i=0;i<arr.length;i++){
//                     let b=arr[i];
//                    
//                     console.log(`第${i+1}坐标为(${b.x},${b.y})`);
//                 }
//                 console.log('点击回车继续');
//                 scanf('%d');

//      }
//      if(a===4){
//                 console.log('4----退出');
//                 scanf('%d');
//                 break;
        
//             }
// }
// 冒泡法排序
// const arr_paixun=[9,2,1,6,4,8];
// for(let i=0;i<arr_paixun.length;i++){
//     for(let j=0;j<arr_paixun.length-1-i;j++){
//         if(arr_paixun[j+1]>arr_paixun[j]){
//             t=arr_paixun[j+1];
           
//             arr_paixun[j+1]=arr_paixun[j];
//             arr_paixun[j]=t;
           

//         }

//     }

// }

// console.log(arr_paixun);
// 学生管理系统
const arr=[];
console.log('欢迎进入');
while(1){
     console.log('1----添加学生成绩');
     console.log('2----删除学生成绩');
     console.log('3----显示所有成绩');
     console.log('4----退出');
     const a=scanf('%d');
     if(a===1){
         console.log('请输入语文');
         let yuwen=scanf('%d');
         console.log('请输入数学');
         let shuxue=scanf('%d');
         console.log('请输入英语');
         let yingyu=scanf('%d');
         let chengji={
             yuwen:yuwen,
             shuxue:shuxue,
             yingyu:yingyu
         }
         arr.push(chengji);
         console.log('添加成功');
         scanf('%d');

     }
     if(a===2){
        arr.pop();

                console.log('删除成功');
                scanf('%d');


     }
     if(a===3){
        console.log('2---显示所以成绩');
                for(let i=0;i<arr.length;i++){
                    let b=arr[i];
                   
                    console.log(`第${i+1}个学生成绩为(语文${b.yuwen}分,数学${b.shuxue}分,英语${b.yingyu})分`);
                }
                console.log('点击回车继续');
                scanf('%d');

     }
     if(a===4){
                console.log('4----退出');
                scanf('%d');
                break;
        
            }
}
