#include<iostream>
using namespace std;
class complex{
    int real;
    int imag;
    public:
    complex(int i=0 , int r=0){
        real = i ;
        imag = r ;    
    }
    friend ostream & operator<<(ostream &out , complex &r);
    /* or pororooroororroror
    friend ostream & operator<<(ostream &out , complex r){
        return cout<<r.real<<"+i"<<r.imag ;
    }*/

};
ostream & operator<<(ostream &out , complex &r){

    return cout<<r.real<<"+i"<<r.imag ;
}
int main(){
    complex r(2,4) ;
    cout<<r<<endl ;
    operator<<(cout,r) ;
}