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
    rectangle r1,r2 ;
    r1.l = 10 ;
    r1.b = 10 ;
    cout<<r1.area()<<endl;
    cout<<r1.perimeter()<<endl;
}