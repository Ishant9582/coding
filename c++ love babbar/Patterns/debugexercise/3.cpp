/*
Pattern
N = 4
   *
  ***
 *****
*******
*/
#include<iostream>
using namespace std;
int main(){
    int n = 4;
   // cin>>n;
    int i=1;
    while(i<=n){
        int j = i,count = 2*n-1,gaps=(count-(2*i-1)),k=1;
        while(k<=gaps){
            cout<<" ";
            k = k + 1;
        }
        int m = 1,ch = 2*i - 1;
        while(m<=ch){
            cout<<"* ";
            m = m + 1;
        }
     
        cout<<"\n";
        i = i + 1;
    }
}