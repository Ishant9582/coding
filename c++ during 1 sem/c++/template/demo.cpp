#include<iostream>
using namespace std;
template<class t>
class stack{
    public:
    t *stk ;
    int top ;
    int size ;
    public:
    stack(int sz){
        size = sz ;
        top = -1;
        stk = new t[size];
    }
    void push(t x);
    t pop();
};
template<class t>
void stack<t>::push(t x){
    if(top==size-1){
        cout<<"stack is fulll"<<endl;
    }
    else{
        top++;
        stk[top] = x ;
    }
}
template<class t>
t stack<t>::pop(){
    t x = 0;
    if (top==-1){
        cout<<"stac is empty"<<endl ;
    }
    else{
        x = stk[top];
        top-- ;
    }
    return x ;

}
int main(){
    stack<int> s(10) ;
    s.push(4);
    s.push(3);
    cout<<"popped element is"<<endl;
    cout<<s.pop()<<endl;
    cout<<"element present at 0 index"<<endl ;
    cout<<s.stk[0];       // displaying stack
}

