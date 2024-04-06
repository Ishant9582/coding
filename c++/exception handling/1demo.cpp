#include<iostream>
using namespace std;
int main(){
    int x=10 , y =0 , c ;
    try{
        if(y==0){
            throw 1 ;
        }
        c = x/y ;
        cout<<c<<endl ;
    }
    catch(int e){
        cout<<"division by "<<"error code"<<e<<endl;
    }
    cout<<"bye" ;
}