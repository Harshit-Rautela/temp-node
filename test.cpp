#include<bits/stdc++.h>
using namespace std;
bool isDfs(int node,int check[], int vis[], int pathVis[],vector<int> adj[]){
    vis[node]=1;
    pathVis[node]=1;
    for(auto it:adj[node]){
        if(!vis[it]){
            if(isDfs(it,check, vis, pathVis, adj)==true){ 
                check[node]=0;
                return true;
            }
        }else if(pathVis[it]==1){
            check[node]=0;
            return true;
        }
    }
    check[node]=1;
    pathVis[node]=0;
    return false;
}
vector<int> safeNodes(int V, vector<int> adj[]){
    int vis[V]={0};
    int pathVis[V] = {0};
    int check[V]={0};  
    vector<int> v;
    for(int i=0;i<V;i++){
        if(!vis[i]){
            isDfs(i,check, vis, pathVis, adj);
        }       
    }
    for(int i=0;i<V;i++){
        if(check[i]==1) v.push_back(check[i]);
    }
    return v;
}