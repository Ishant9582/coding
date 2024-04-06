#include<iostream>
#include<vector>
using namespace std;
int maxones(vector<vector<int>>&v){
    int maxones=0;
    int maxonesrow=0;
    int columns=v[1].size();
    for(int i=0;i<v.size();i++){
        for(int j=0;j<v[i].size();j++){
            if (v[i][j]==1){
                int numberofones = columns-j;
                if(numberofones>maxones){
                    maxones=numberofones;
                    maxonesrow=i;
                }
            }

        }
    }
    return maxonesrow;
}
int main(){
    int n,m;
    cin>>n>>m;
    vector<vector<int>>vec(n,vector<int>(m));
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin>>vec[i][j];
        }
    }
    int res = maxones(vec);
    cout<<res<<endl;

}