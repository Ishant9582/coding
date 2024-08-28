#include<iostream>
using namespace std;
class outer{
    public:
    void fun(){
        i.display();
    }
    class inner{
        public:
        int b = 6 ;
        void display(){
            cout<<b<<endl;
        }
    };
    inner i;    
    
};
int main(){ 
    //outer::inner i;
    //i.b = 4 ;

    //i.display();
    //////////////////or//////////////////////////////////
    outer c; 
    c.fun();
    
}