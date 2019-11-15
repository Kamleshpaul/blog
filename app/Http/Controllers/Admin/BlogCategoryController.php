<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogCategory;
use Illuminate\Http\Request;

class BlogCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (isset($_GET['ALL'])) {
            $blogCategory = BlogCategory::all();
            return response([
                'data' => $blogCategory,
            ]);
        }
        $blogCategory = BlogCategory::paginate(10);
        return response([
            'data' => $blogCategory,
        ]);
    }

    /**
     * Display a single of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $blogCategory = BlogCategory::find($id);
        return response([
            'data' => $blogCategory,
            'message' => 'success',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        // slug genrate
        $slug = \Str::slug($data['name']);
        $count = BlogCategory::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        if ($count) {
            $data['slug'] = $slug . '-' . $count;
        } else {
            $data['slug'] = $slug;
        }

        $blogCategory = BlogCategory::create($data);
        return response([
            'message' => "success",
            'data' => $blogCategory,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $blogCategory = BlogCategory::find($id);
        // slug genrate
        $slug = \Str::slug($blogCategory->name);
        $count = BlogCategory::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
        if ($count) {
            $data['slug'] = $slug . '-' . $count;
        } else {
            $data['slug'] = $slug;
        }

        $blogCategory->update($data);
        return response([
            'data' => $blogCategory,
            'message' => 'success',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $blogCategory = BlogCategory::find($id);
        $blogCategory->delete();
        return response([
            'message' => 'success',
        ]);
    }
}
