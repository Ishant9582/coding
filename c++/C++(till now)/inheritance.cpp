#include<iostream>
using namespace std;
class first{
    public:
    int a;
    
    void show(){
        cout<< a <<endl ;
    }

};
class derived:public first{
    public:
    int b ;
   
    void display(){
        cout<<a<<b<<endl ;
    }

};
int main(){
    first c ;
    c.a = 5; 
    derived d ;
    d.b = 10 ;
    d.a = 3 ;
    c.show() ;
    d.display();

}