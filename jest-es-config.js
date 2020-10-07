module.exports = () => {
  return {
    esVersion: '7.9.2', // ! must be exact version. Ref: https://github.com/elastic/elasticsearch-js .
    // don't be shy to fork our code and update deps to correct.
    clusterName: 'elasticsearch',
    port: 9200,
    indexes: [
      {
        name: 'test-result',
        body: {
          settings: {
            number_of_shards: '1',
            number_of_replicas: '1'
          },
          aliases: {
            'test-restult': {}
          },
        }
      }
    ]
  };
};