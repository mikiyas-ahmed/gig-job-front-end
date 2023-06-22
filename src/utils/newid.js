let lastId = 0;

 function newid(prefix='id') {
    lastId++;
    return `${prefix}${lastId}`;
}
// export default newid;