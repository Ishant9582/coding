#include<iostream>
using namespace std;
int division(int a , int b)throw(double) {
    if(b==0){
        throw 1.5 ;
    }
    return a/b ;
}
int main(){
    int x=4 , y=0 , z ;
    try{
        z = division(x,y) ;
        cout<<z<<endl ;
    }
    catch(double e){
        cout<<"not divisible "<<e<<endl;
    }
    
}