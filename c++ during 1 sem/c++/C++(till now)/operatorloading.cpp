#include<iostream>
using namespace std;
class comp{
    public:
    int real ;
    int imag ;
    public:
    comp operator+(comp c){         // in place of operator+ we can use add also but in place of r3=r1+r2 we need to write r3=r1+r2 
        comp temp ;
        temp.real = this->real + c.real ;    // or we can write real + c.real
        temp.imag = this->imag + c.imag ;
        return temp  ;
    }
       /* comp operator+(comp &c){        
        c.real = real + c.real ;    we cant use this as pass by reference it is 
        c.imag = imag + c.imag ;        and ye r2 ki values bhi badal dega then r3 and r2 will have same 
        cout<<c.real<<"+"<<c.imag<<"i";               values
        return c ;
        }*/
};
int main(){
    comp r1,r2,r3 ;
    r1.real = 4 ; r2.real = 2;
    r1.imag = 2 ; r2.imag = 2;
    r3 = r1 + r2 ; 
    cout<<r3.real<<"+"<<r3.imag<<"i";
}