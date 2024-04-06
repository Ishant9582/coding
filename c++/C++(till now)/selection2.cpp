#include<iostream>
#include<vector>
using namespace std;
void selectionsort(vector<int>&v){
    for(int i=0; i<v.size()-1;i++){
        int max_idx=i;
        for(int j=4-i;j<=0;j--){
            if(v[j]>v[max_idx]){
                max_idx=j;
            }

        }
        if(max_idx!=0){
            swap(v[i],v[max_idx]);
        }
    }
}
int main(){
    int n;
    cin>>n;
    vector<int>v(n);
    for(int i=0;i<n;i++){
        cin>>v[i];
    }
    selectionsort(v);
    for(int i=0;i<n;i++){
        cout<<v[i]<<" ";
    }
}