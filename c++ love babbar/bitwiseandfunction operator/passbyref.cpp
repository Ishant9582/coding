#include <iostream>
using namespace std ;
void  p(int &o){
    o++ ;
}
int main(){
    int n = 31 ;

    p(n) ; 
    cout<<n ; 

}