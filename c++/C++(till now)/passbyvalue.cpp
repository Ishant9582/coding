#include<iostream>
using namespace std;
int changevalue(int z){
    z=100;
    //cout<<z<<endl;//it will give 100
   // return(z); //not do anything with output output will be 7
    //cout<<&z<<endl;
}
int main(){
    int a=7;
    changevalue(a);
    cout<<a<<endl;
    //cout<<&a<<endl;//memory address is different
    
}