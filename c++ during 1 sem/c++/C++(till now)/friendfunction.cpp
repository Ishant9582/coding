#include<iostream>
using namespace std;
class one{
    public: int a ;
    protected: int b;
    private: int c ;
    friend void fun() ;
};
void fun(){
    one t ;
    t.a = 10 ;
    t.b = 10 ;
    t.c = 10 ;
    cout<<t.a<<endl ;
    cout<<t.b<<endl ;
    cout<<t.c<<endl ;
} 
int main(){
    fun() ;
}