#include<iostream>
using namespace std ;
class base {
    public:
    base(){
        cout<<"no para base"<<endl ;
    }
    base(int a){
        cout<<"para base"<<a<<endl ;
    }
} ;
class derived:public base{
    public:
    derived(){
        cout<<"no para derived"<<endl ;
    }
    derived(int b){
        cout<<"para derived"<<b<<endl;
    }
    derived(int x , int a):base(x){
        cout<<"para derived "<<a<<endl;
        cout<<"para base "<<x<<endl;
    }
} ;
int main(){
    
    derived d(6,7);
   // base c(5);
}