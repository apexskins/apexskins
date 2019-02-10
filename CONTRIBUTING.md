## Contribution Guide

### Issues

[Create a github issue](https://github.com/apexskins/apexskins/blob/master/CONTRIBUTING.md) if you...

- Think we need a new component or feature
- Want to see an improvement to an existing component or feature
- Have discovered a bug



### Development

1. Create new branch from latest master, naming branch 

   ```
   APEX-description
   ```

   - `git checkout -b APEX-description`

2. Write some code

3. Add & commit your files with a message

   1. `git add .`
   2. `git commit -m "APEX: Added an entry to the Readme"`

4. Rebase (if necessary)

   1. git fetch origin
   2. git rebase origin/master

5. Push code

   - `git push origin -u APEX-description`

