#include<iostream>
using namespace std;
class rectangle{
    public:
    int l ;
    int b ;
    int area(){
        return (l*b);
    }
    int perimeter(){
        return 2*(l+b);
    }
} ;
int main(){  
       // p = &r1 ;
    //*rectangle *p = new rectangle ;
    rectangle *p ;
    p = new rectangle ;
    p->l = 10 ;
    p->b = 10 ;
    cout<<p->area()<<endl;
    cout<<p->perimeter()<<endl;

                                   // or
    rectangle *q = new rectangle() ; 


    q->l = 10 ;
    q->b = 10 ;
    cout<<q->area()<<endl;
    cout<<q->perimeter()<<endl;
} 