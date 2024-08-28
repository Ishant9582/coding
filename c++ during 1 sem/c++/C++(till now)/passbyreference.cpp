#include<iostream>
using namespace std;
int changevalue(int &z){
    z=100;
   
   
}
int main(){
    int a=7;
    changevalue(a);
    cout<<a<<endl;
    
}