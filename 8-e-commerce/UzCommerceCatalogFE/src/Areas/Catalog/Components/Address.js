function Address({ register }) {
    return (
        <>
            <div class="col-md-6 col-sm-12 col-xs-12">
                <h3>Teslimat Bilgileri</h3>
                <div class="billing-field">
                    <div class="col-12 form-group">
                        <label>Adınız</label>
                        <input {...register("name")} className="form-control" placeholder="Adınız" />
                    </div>

                    <div class="col-12 form-group">
                        <label>Soyadınız</label>
                        <input {...register("surname")} className="form-control" placeholder="Soyadınız" />
                    </div>

                    <div class="col-12 form-group">
                        <label>Telefon Numaranız</label>
                        <input {...register("phone")} className="form-control" placeholder="Telefon Numaranız" />
                    </div>

                    <div class="col-md-12 form-group">
                        <label>Adresiniz</label>
                        <textarea {...register("addressDescription")} className="form-control" placeholder="Address" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address