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
    rectangle r1;
    rectangle *p ;
    p = &r1 ;
    p->l = 10 ;
    p->b = 10 ;
    cout<<p->area()<<endl;
    cout<<p->perimeter()<<endl;
}        