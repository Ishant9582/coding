#include<iostream>
using namespace std ;
class complex{
    int real ;
    int imag ;
    public:
    void display(){
        cout<<real<<"+i"<<imag;
    
    }
    complex(int r =0 , int i=0){
        real = r ;
        imag = i ;    
    }
    friend complex operator+(complex c1 , complex c2) ;


};
    complex operator+(complex c1 , complex c2){
        complex temp ;
        temp.real = c1.real + c2.real ;
        temp.imag = c1.imag + c2.imag ;
        return temp ;
    }
int main(){
    complex c1(2,4),c2(2,4),c3 ;
  
    c3 = c1+c2;
    c3.display();
}