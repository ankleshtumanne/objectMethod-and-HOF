arr = [10, 24, 56, 72, -10, -88, 100, 564]

sum=0
count=0
for i in range(len(arr)):
    if i%2==1:
        sum+=arr[i]
        count+=1

# if s
ans=sum//count
print(ans)