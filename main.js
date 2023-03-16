/*0
false       - % lấy phần dư      && tất cả đều đúng      (===,!==, số sánh luôn cả giữ liệu  ) (==,!== chỉ so sánh giá trị )     != 
                                   ! phủ định nhóm biểu thức đk 
                                   || or chỉ 1 cái đúng thì tất cả đều đúng 
                / chia hết         Number type số       
                                    String type nằm trong  cặpnháy ""
""_''                               boolen type truse falsse ,,,var biến = function(){ output kết quả }gọi ra biến () để chạy
typeof kiểm tra giá trị 
symbol                               
undefined kiểm tra giá trị 
NaN
null không có gì 
luôn luông là đk sai nếu dùng if else */
function songuyenduong(vlaue){
    return (Number.isInteger(vlaue)) && vlaue > 0 ;
}
let vlaue = [1,2,3,4,64,5.5]
console.log(songuyenduong(vlaue));

