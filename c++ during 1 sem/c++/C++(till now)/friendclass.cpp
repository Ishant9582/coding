#include<iostream>
using namespace std;
class two ;
class one{
    public: int a ;
    protected: int b;
    private: int c ;
    friend two ;
};
class two{
    public:
    one t ;
    void fun(){
    t.a = 10 ;
    t.b = 10 ;
    t.c = 10 ;
    cout<<t.a<<endl ;
    cout<<t.b<<endl ;
    cout<<t.c<<endl ;
    }
};
int main(){
    two b ;
    b.fun() ;
}