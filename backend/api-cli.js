require('dotenv').config()

const { program } = require('commander')
const { getAllPosts, createPost, addLike, deletePost, editPost, getPostById, paginatePost } = require('./cli/actions/post')

program
    .name('API CLI - instagram challenge')
    .description('CLI to access API services')
    .version('1.0.1')

program.command('get-all-posts') 
    .action(getAllPosts)

program.command('get-post-by-id')
    .option('--id <id>', 'post id')
    .action(getPostById)

program.command('paginate')
    .option('-p, --page <number>', 'page number')
    .option('-l, --limit <number>', 'limit per page')
    .action(paginatePost)

program.command('create-post')
    .option('-u, --username <username>', 'post username')
    .option('-t, --title <title>', 'post title')
    .option('-i, --image <image>', 'post image')
    .action(createPost)

program.command('add-like')
    .option('--id <id>', 'post id')
    .action(addLike)

program.command('delete-post')
    .option('--id <id>', 'post id')
    .action(deletePost)

program.command('edit-post')
    .option('--id <id>')
    .option('-t, --title <title>', 'new title at post')
    .action(editPost)

program.parse(process.argv)