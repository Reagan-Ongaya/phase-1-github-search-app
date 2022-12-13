const octocat = new Octocat({
    auth: 'YOUR-TOKEN'
})

await octokit.request('GET /https://api.github.com/search/users?q=octocat}',{})