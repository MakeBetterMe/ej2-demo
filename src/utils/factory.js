export function createConnector(id,sourceId,targetId){
  return {
    id: id,
    type: 'Orthogonal',
    sourceID: sourceId,
    targetID: targetId,
    // segments: [{
    //   type: 'Orthogonal',
    //   // Defines the direction for the segment lines
    //   direction: 'Bottom',
    //   // Defines the length for the segment lines
    //   length: 150
    // }],
  }
}


export function createNode(id){
  return {
    id: id,
    width: 200,
    height: 80,
    shape: {
      type: 'HTML',
    }
  }
}
