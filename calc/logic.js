const inp1=document.getElementById('inp1')
const inp2=document.getElementById('inp2')
const result=document.getElementById('result')

const add=document.getElementById('add')
const sub=document.getElementById('sub')
const mult=document.getElementById('mult')
const divis=document.getElementById('divis')

add.onclick=function(){
	result.textContent=Number(inp1.value) + Number(inp2.value)
}
sub.onclick=function(){
	result.textContent=Number(inp1.value) - Number(inp2.value)
}
mult.onclick=function(){
	result.textContent=Number(inp1.value) * Number(inp2.value)
}
divis.onclick=function(){
	if(inp2.value==0){
		result.textContent="На 0 делить нельзя!"
	}
	else{
		result.textContent=Number(inp1.value) / Number(inp2.value)}
}