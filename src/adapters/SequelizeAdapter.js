import DefaultAdapter from './DefaultAdapter'

export default class SequelizeAdapter extends DefaultAdapter {
  build(Model, props) {
    return Model.build(props)
  }

  async save(model, Model, transaction = null) {
    const saveOptions = {
      transaction,
    }

    return Promise.resolve(model.save(saveOptions)).then(() => model)
  }
}
