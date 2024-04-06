#include<iostream>
using namespace std;
int main(){
    int array[5]={1,2,3,4,5};
    cout<<"enter no. to search"<<endl;
    int a;
    cin>>a;
    int ans=-1;
    for(int i=0;i<5;i++){
        if(array[i]==a){
            ans=i;
            break;

        }

        
    }
    cout<<ans<<endl;

}